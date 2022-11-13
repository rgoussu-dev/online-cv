const getStackOutputs = async () => {
    const provider = serverless.getProvider('aws');  
    const { stage, region } = provider.options;
    const stackName = provider.naming.getStackName();
    const result = await provider.request(
      'CloudFormation',
      'describeStacks',
      { StackName: stackName },
      stage,
      region,
    );
  
    const outputsArray = result.Stacks[0].Outputs;
  
    const outputs = {};
    for (let i = 0; i < outputsArray.length; i++) {
      outputs[outputsArray[i].OutputKey] = outputsArray[i].OutputValue;
    }
  
    const url = outputs.ServiceEndpoint;
    console.log(url);
  };
  
  getStackOutputs();